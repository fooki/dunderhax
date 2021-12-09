# frozen_string_literal: true

module Mission
  class Repository
    class << self

      MISSIONS = {
        "return-test" => Mission::ReturnTest.new
      }

      def find(name)
        MISSIONS.fetch(name)
      end
    end
  end
end
