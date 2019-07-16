from django.core.mail import EmailMultiAlternatives
from django.views.generic import TemplateView, CreateView
from django.shortcuts import redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
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


@api_view(['GET', 'POST'])
def send_mail_once(request):
    subject, from_mail, to = 'hello', 'server@gmail.com', 'client@narod.ru'
    text_content = 'This is an important message.'
    html_content = '<p>This is an <strong>important</strong> message.</p>'
    msg = EmailMultiAlternatives(subject, text_content, from_mail, [to])
    msg.attach_alternative(html_content, "text/html")
    msg.send()
    return Response()
