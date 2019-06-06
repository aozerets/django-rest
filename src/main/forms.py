from django import forms

from programs.models import Program


class SignOnCourseForm(forms.Form):
    programs = Program.objects.all()
    inlist = [(x.id, x.id) for x in programs]
    CHOICES = tuple(inlist)
    program = forms.CharField(widget=forms.Select(choices=CHOICES))
    template_name = "registration/signoncourse.html"
