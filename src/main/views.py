from django.views.generic import TemplateView, CreateView
from django.shortcuts import redirect

from .forms import UserForm


class Main(TemplateView):
    def get(self, request, *args, **kwargs):
        return redirect("signup")

    def post(self, request, *args, **kwargs):
        return redirect("signup")


class SignUp(CreateView):
    form_class = UserForm
    success_url = '/api/v1/programs/'
    template_name = 'registration/signup.html'
