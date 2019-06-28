class Api::ChoicesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_choice
  before_action :choice, only: [:show]

  def index
    @choices = @question.choices.all
    render json: @choices
  end

  def show 
  end
  
  def new 
  end

  def create
    choice = @question.choices.new(choice_params)
    if @choice.save
      render json: choice
    else
      render json: @choices.errors, status: 422
    end 
  end

  def update
    if @choice.update(choice_params)

      render json: @choice
    else
      render json: @choice.errors, status: 422
    end
  end

  def destroy
    @choice.destroy
  end

  private 

  def set_choice
    @choices = Choice.find(params[:id])
  end

  def set_question
    @question = Question.find(params[:question_id])
  end
  def choices_params
    params.require(:choice).permit(:answer, :correct, //may need question_id) 
  end
end

