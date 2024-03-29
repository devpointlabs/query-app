class Api::SubmissionsController < ApplicationController

def create
    submission = Submission.new(submission_params)
    if submission.save
        render json: submission 
    else 
        render json: {errors: submission.errors}, status: 422
    end
    
end

def show_grades
    render json: Submission.show_grades(params[:quiz_id])

end

 def id_catcher
    render json: Submission.id_catcher()
 end 

private 
def submission_params
    params.require(:submission).permit(:user_id, :quiz_id)
end 

end 
  


