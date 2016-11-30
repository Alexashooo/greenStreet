class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  after_filter :set_csrf_cookie_for_ng

  def set_csrf_cookie_for_ng
      cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  def index

  end


  protected

  def verified_request?
      super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end

end
