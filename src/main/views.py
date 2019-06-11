from django.urls import reverse_lazy
from django.views.generic import TemplateView, CreateView

from .forms import UserForm


class SignUp(CreateView):
    form_class = UserForm
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'


class Main(TemplateView):
    def get_context_data(self, **kwargs):
        context = super(Main, self).get_context_data(**kwargs)
        if self.request.user.is_authenticated:
            self.template_name = "main/base.html"
        else:
            self.template_name = "main/login.html"
        return context
