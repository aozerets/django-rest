from django.urls import reverse_lazy
from django.views.generic import TemplateView, CreateView
from django.shortcuts import redirect


class Main(TemplateView):
    #success_url = reverse_lazy("/api/v1/users/")
    def get(self, request):
        return redirect("/api/v1/users/")

    def post(self, request):
        return redirect("/api/v1/users/")
