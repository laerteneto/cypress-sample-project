Feature: Testing BDD
    As tester
    I want to validate BDD for multiple parameters in a title
    So that I can assure that the cucumber plugin accpets variables in the scenario title

    @aaa
    Scenario Outline: Test case with test <tc>
        Given I am on the <website> screen
        Then I am taken to the <value> screen

        Examples:
            | website                         | value    | tc  |
            | 'https://www.google.com/'       | 'google' | 123 |
            | 'https://www.apple.com'         | 'apple'  | 456 |

    @ignore
    Scenario Outline: Test tags
        Given I am on the <website> screen
        Then I am taken to the <value> screen

        Examples:
            | website                         | value    | tc  |
            | 'https://www.google.com/'       | 'google' | 123 |
            | 'https://www.apple.com'         | 'apple'  | 456 |
