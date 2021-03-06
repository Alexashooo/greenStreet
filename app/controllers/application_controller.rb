class ApplicationController < ActionController::Base
    before_action :configure_permitted_parameters, if: :devise_controller?


    respond_to :json

    def index
    end


    protected

    def configure_permitted_parameters
      added_attrs = [:email, :password, :password_confirmation, :remember_me]
      devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
      devise_parameter_sanitizer.permit :account_update, keys: added_attrs
    end

    def authenticate_user!
      if user_signed_in?
        super
      else
        render json: {error: "User is not signed in!", status: 400}, status: 400
      end
    end

end
