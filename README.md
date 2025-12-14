# Github Lab

Playground for experimenting with GitHub Action and repository automation, check [Documentation](https://docs.github.com/en/actions).

## Workflow
A workflow is an YAML configuration file used to orchestrate automated processes in Github Actions. It defines when automation is triggered (for example on push, pull request or manual dispatch), which jobs are executed, the execution order, and the environment (runner) where the jobs run.
A workflow acts as an orchestrator that invokes one more actions to perform tasks such as building, testing, and deploying applications.
Workflow are typically defined in `.github/workflows/*.yml`.
For the workflow syntax, please refer to the [documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax).

## Action
`action.yml` is not an orchestrator, but an action. `action.yml` is a file meatadata that defines a single Github Action. Often, the `action.yml` file is defines in the root of the repository.
For the `action.yml` syntax, please refer to the [documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax).
