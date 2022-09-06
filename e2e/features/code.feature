Feature: Pecode testing
    Background: 
      Given I open page on ui        

    Scenario: Form check
      Given I check the field for empty user name:
            | UserName | Text                   |
            |          | Please enter username. |
       When I check the field for an empty password:
            | Password | Text                        |
            |          | Please enter your password. |
       Then General login error:
            | UserName | Password | Text                                                |
            | Виталий  |    123   | Oops! Something went wrong. Please try again later. |