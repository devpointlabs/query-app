require 'rails/application_controller'

class StaticController < Rails::ApplicationController
  layout false

  def index
    render file: Rails.root.join('public', 'index.html')
  end
end

#might need a public folder with a index.html file