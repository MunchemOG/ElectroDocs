// Site-wide branding. Update these values to change the name and links everywhere.
export const brand = {
  name: 'ElectroDromos',
  // Public URL of the site root, including the base path (see BASE_PATH in next.config.mjs)
  url: 'https://munchem.me/Electrodromos',
  // Maven repository teams add to build.dependencies.gradle: upload ElectroDromos's `./gradlew publish`
  // output (build/repo) here.
  maven: 'https://munchem.me/maven',
  // The ElectroDromos release the docs install, and the oldest Pedro Pathing it supports.
  version: '0.0.1-PreAlpha',
  minPedro: '3.0.1',
  pedroTuning: '1.0.1',
  // Contact for ElectroDromos questions
  email: 'mithun1214.d01@gmail.com',
  github: {
    owner: 'MunchemOG',
    repo: 'ElectroDocs',
  },
};

export const githubUrl = `https://github.com/${brand.github.owner}/${brand.github.repo}`;
export const issuesUrl = `${githubUrl}/issues`;
