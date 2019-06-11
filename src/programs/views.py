from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
from django.views.generic import ListView, DetailView
from rest_framework.decorators import api_view

from main.models import UserProfile
from .models import Program, Studentship


class Programs(ListView):
    template_name = 'programs/programs.html'
    queryset = Program.objects.all()
    context_object_name = 'programs'


class DetailProgram(DetailView):
    template_name = 'programs/program.html'
    queryset = Program.objects.all()
    context_object_name = 'program'


@login_required
@api_view(['POST'])
def sign_on_course(request):
    program = Program.objects.get(pk=request.data['program_id'])
    user_profile = UserProfile.objects.get(user=request.user)
    s = Studentship(user_profile=user_profile, program=program)
    s.save()
    return redirect('programs')
