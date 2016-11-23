Rails.application.routes.draw do

  #devise_for :users

  Rails.application.routes.draw do
      devise_for :users, controllers: {
        sessions: 'users/sessions'
      }
  end

  get '*path' => 'application#index'
  root to:'application#index'

end
