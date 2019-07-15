class Choice < ApplicationRecord
  belongs_to :question, required: true
  belongs_to :submission, required: true
end
