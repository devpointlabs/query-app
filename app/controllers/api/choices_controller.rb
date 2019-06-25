class Api::ChoicesController < ApplicationController
  before_action :set_question
  before_action :set_choice, only: [:show, :create]
  def index
    render json: @question.choice
  end

  def show
    
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def set_choice
  end
  def set_question


  end
  def choice_params

  end
end
