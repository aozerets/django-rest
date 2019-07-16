from django.contrib import admin
from .models import UserProfile


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'status')

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        qs = qs.prefetch_related('user')
        return qs


admin.site.register(UserProfile, UserProfileAdmin)
