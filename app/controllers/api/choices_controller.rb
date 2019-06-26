class Api::ChoicesController < ApplicationController
  before_action :choice, only: [:index, :show]

  def index
    render json: @choices
  end

  def show 
    render json: @choices
  end
  
  def new 
  end

  def create
    @choice = Choice.new(choice_params)
    if @choice.save
      render json: @article, status: :created, location: //something
    else
      render json: @choices.errors, status: :unprocessable_entity
    end 
  end

  def update
    if @choice.update(choice_params)

      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @choice.destroy
  end

private 

def set_choice
  @choices = Choice.find(params[:id])
end

def choices_params
  params.require(:choice).permit(:answer, :correct, //may need question_id) 

end
