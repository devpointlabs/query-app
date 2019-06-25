class Api::QuizzesController < ApplicationController
  
  before_action :set_quiz, only: [:show, :update, :destroy]
  
  def index
    render json: @quiz
  end

  def show
    render json: @quiz(params[:id])
  end

  def create
    quiz = @quiz.new(quiz_params)
    if quiz.save
      render json: quiz
    else 
      render json: item.errors, status: 422
    end 
  end

  def update
    if @quiz.update(quiz_params)
      render json: @quiz
    else 
      render json: item.errors, status: 422
    end 
  end

  def destroy
    @quiz.destroy
  end

  private
  def set_quiz
    @quiz = Quiz.find(params[:id])
  end 

  def quiz_params
    params.require(:quiz).permit(:name, :created_at, :updated_at)
  end 
end
