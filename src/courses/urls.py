from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from main.views import null_view

urlpatterns = [
    # path('api-auth/', include('rest_framework.urls')),
    # path('accounts/', include('django.contrib.auth.urls')),
    path('rest-auth/registration/account-email-verification-sent/', null_view, name='account_email_verification_sent'),
    path('rest-auth/registration/account-confirm-email/', null_view, name='account_confirm_email'),
    path('password-reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/', null_view, name='password_reset_confirm'),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('admin/', admin.site.urls),
    path('api/v1/', include('api.urls')),
    path('', include('main.urls')),
    path('<page>/', include('main.urls')),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [path('__debug__/', include(debug_toolbar.urls))]
