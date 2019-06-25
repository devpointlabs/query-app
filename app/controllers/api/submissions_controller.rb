class Api::SubmissionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_submission, only: [:show, :update, :destroy]

  def index
    render json: current_user.submissions
  end

  def show
    render json: current_user.submission
  end

  def create
    submission = current_user.submissions.new(submission_params)
    if submission.save
      render json: submission
    else 
      render json: submission.errors, status: 422
    end
  end

  def update
    if current_user.submission.update(submission_params)
      render json: current_user.submission
    else
      render json: submission.errors, status: 422
    end
  end

  def destroy
    current_user.submission.destroy
  end

  private 
    def set_submission
      current_user.submission = Submission.find(params[:id])
    end
    
    def submission_params
      submissions.require(:submission).permit(:field)
    end
end


  