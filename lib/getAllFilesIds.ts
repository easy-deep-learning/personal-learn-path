import fs from 'fs'

/**
 * @param {String} path
 * @param {String} [ext='md']
 * @returns {String[]}
 */
export default function getAllFilesIds (path: fs.PathLike, ext = 'md') {
  const fileNames = fs.readdirSync(path)

  return fileNames.map(name => name.replace(/\.md$/, ''))
}
