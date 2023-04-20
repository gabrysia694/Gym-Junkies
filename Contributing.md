# Contributing Guidelines

Thank you for considering contributing to Gym-Junkies! Please take a moment to review the guidelines below before making a contribution.

## How to Contribute

1. Fork the repository
2. Create a new branch for your contribution (e.g. `git checkout -b my-new-feature`)
3. Commit your changes (e.g. `git commit -m 'Add some feature'`)
4. Add upstream command to your fork (e.g. `git remote add upstream https://github.com/gabrysia694/Gym-Junkies`)
5. Push your changes to your fork (e.g. `git push origin my-new-feature`)
6. Create a pull request

## How to run in your local machine

1. install dependencies
   > `pnpm install`
2. run the app
   > `pnpm dev`

## Add your card

1. Go to `src/DB/exerciseData.json`
2. Add the following code to the end of the file

```json
{
  "exercise": "Exercise Name",
  "instructions": ["Instruction 1", "Instruction 2", "Instruction 3"],
  "videoLink": " Youube video link",
  "gh-name": "Your Github username",
  "image": "Excercise image link"
}
```

# Code of Conduct

We have adopted a Code of Conduct that we expect all contributors to adhere to. Please read the [CODE_OF_CONDUCT.md](https://github.com/gabrysia694/Gym-Junkies/blob/main/CODE_OF_CONDUCT.md) file in the repository before making any contributions.

# Report Bugs and Issues

If you find a bug or have a suggestion for improvement, please submit an issue on the repository's issue tracker. When submitting an issue, please provide as much detail as possible, including steps to reproduce the issue and any error messages you encountered.

# Licensing

Gym-Junkies is licensed under the MIT License. By contributing to this repository, you agree to license your contributions under the same license.

# Code Review Process

All pull requests will be reviewed by the repository maintainers. We will provide feedback and suggest changes if necessary. Once your pull request is approved, we will merge it into the main repository.

Thank you for contributing to Gym-Junkies! 🏋️‍♀️🏋️‍♂️
