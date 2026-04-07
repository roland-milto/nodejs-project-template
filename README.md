# How to

Consider if the project is a backend or frontend project.
Based on the information, move the `src` folder in `apps` into the project root.
Than delete the `apps` folder.

## Code reviews
In the `/docs/CODEOWNERS` file, change the person(s) or team
responsible for reviewing the files after a PULL request.

You can find further documentation here:
- [Create CODEOWNERS file for Gitea](https://docs.gitea.com/usage/code-owners)
- [Create CODEOWNERS file for Github](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)

## Commits

If you do commit, please add a commit message. Use the following format (just an example):
- feat: Users can register now
- fix: Token-refresh works now
- refactor: Split auth-service into two services

More information can be found in the [commit message convention](https://www.conventionalcommits.org/en/v1.0.0/).

The `CHANGELOG.md` will be created or be updated automatically before publishing, using the commit messages.
These prefixes are used by the `standard-version` module and will organize the changelog.

Example:
```markdown
## 1.2.0

### Features
- Users can register now

### Bug Fixes
- Token-refresh works now

### Refactoring
- Auth-service splitted into two services

```

## package.json
Replace the string `add_information_here` with your information.

## To-dos, hints and notes

The project uses `eslint-plugin-todo`.

```typescript
// TODO: Add TypeScript support for runner
// FIXME(@roland): Handle empty folders correctly
// NOTE: Consider refactoring logging system
```

The plugin is installed automatically. If not, use:

```bash
npm install --save-dev eslint eslint-plugin-todo
```
