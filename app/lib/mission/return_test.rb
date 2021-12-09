# frozen_string_literal: true

require 'open3'

module Mission
  class ReturnTest

    def run(input)
      complete_input = "#{input}\n#{epilogue}"

      Open3.popen3(command(complete_input)) do |stdin, stdout, stderr, thread|
        stdin.puts complete_input
        stdin.puts "\r\n"
        stdin.close

        puts stdout.read.chomp

        exit_status = thread.value
        puts "EXIT STATUS: #{exit_status.exitstatus}"
      end
    end

    def placeholder
      <<-TEXT
  def return_test
    # Return test string here
    "test"
  end
TEXT
    end

    private

    def command(input)
      "docker run --ulimit cpu=2 --rm -a STDIN -a STDOUT -a STDERR -i ruby ruby 2>&1"
    end

    def epilogue
      <<-TEXT
require "test/unit"

class TestReturnTest < Test::Unit::TestCase
  def test_simple
    assert_equal("test", return_test)
  end
end
TEXT
    end
  end
end
