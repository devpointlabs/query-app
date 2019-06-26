class Api::QuizzesController < ApplicationController
  before_action :set_quiz, only: [:show, :update, :create, :destroy]

  def index
    render json: Quiz.all

  end
  def show

  end
  def create
    quiz = Quiz.new(quiz_params)


  end
  def update

  end
  def destroy

  end
  private
  def set_quiz
    @quiz = Quiz.find(params[:id])
  end
  def quiz_params
    params.require(:quiz).permit(:name)
  end
end
