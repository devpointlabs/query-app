class Choice < ApplicationRecord
  belongs_to :question
  has_many :submission_choices
end
