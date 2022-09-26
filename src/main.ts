import * as core from '@actions/core'
import * as github from '@actions/github'

const expoBaseURL = 'exp://u.expo.dev/update/'
const qrBaseURL =
  'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

async function run(): Promise<void> {
  try {
    const iosBuildID = core.getInput('ios-build-id', {required: true})
    const androidBuildID = core.getInput('android-build-id', {required: true})

    const iosURL = expoBaseURL + iosBuildID
    const androidURL = expoBaseURL + androidBuildID

    const defaultMessage =
      `Builds available on Expo Go\n\n` +
      `\n|iOS|Android|` +
      `\n|:-:|:-:|` +
      `\n|<a href="${iosURL}"><img src="${
        qrBaseURL + iosURL
      }" alt="iOS Build Link"></a>|<a href="${androidURL}"><img src="${
        qrBaseURL + androidURL
      }" alt="Android Build Link"></a>|`

    const token = core.getInput('repo-token', {required: true})
    const octokit = github.getOctokit(token)
    const {repo, issue} = github.context

    await octokit.rest.issues.createComment({
      owner: repo.owner,
      repo: repo.repo,
      issue_number: issue.number,
      body: defaultMessage
    })
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
