class Api::ChoicesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_question
  before_action :set_choice, only: [:show]
  

  def index
    @choices = @question.choices.all
    render json: @choices
  end

  def show 
  end
  
  def new 
    @choice = Choice.new
  end

  def create
    choice = @question.choices.new(choice_params)
    submission = Submission.find(params[:submission_id])
    choice.submission_id = submission.id
    if choice.save
      
      render json: choice
    else
      render json: choice.errors, status: 422
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
    @choice = Choice.find(params[:id])
  end

  def set_question
    
    @question = Question.find(params[:question_id])
  end

  def choice_params
    params.require(:choice).permit(:answer, :correct, :submission_id) 
  end
end

