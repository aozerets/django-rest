from django import forms
from django.contrib.auth import password_validation
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _
from .models import UserProfile
from .tasks import send_mail


class UserForm(forms.ModelForm):
    error_messages = {
        'password_mismatch': _("The two password fields didn't match."),
    }
    password1 = forms.CharField(
        label=_("Password"),
        strip=False,
        widget=forms.PasswordInput,
        help_text=password_validation.password_validators_help_text_html(),
    )
    password2 = forms.CharField(
        label=_("Password confirmation"),
        widget=forms.PasswordInput,
        strip=False,
        help_text=_("Enter the same password as before, for verification."),
    )

    class Meta:
        model = User
        fields = ('username', 'email')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def save(self, commit=True):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError(
                self.error_messages['password_mismatch'],
                code='password_mismatch',
            )
        user = super().save(commit=False)
        password_validation.validate_password(password2, user)
        user.set_password(self.cleaned_data.get('password2'))
        if commit:
            user.save()
            user_profile = UserProfile(user=user)
            user_profile.save()
            sub = "Awesome registration"
            text_content = "Greetings! Glad to see u in our Programs"
            send_mail.delay(sub, self.cleaned_data.get("email"), text_content)
        return user
