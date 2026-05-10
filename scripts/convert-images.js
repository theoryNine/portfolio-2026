import sharp from 'sharp'
import { readdir } from 'fs/promises'
import path from 'path'

const SITEGRABS_DIR = 'src/assets/sitegrabs'
const HERO_DIR = 'src/assets'

const sitegrabFiles = await readdir(SITEGRABS_DIR)
for (const file of sitegrabFiles) {
  if (file.endsWith(':Zone.Identifier')) continue
  const ext = path.extname(file).toLowerCase()
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue

  const input = path.join(SITEGRABS_DIR, file)
  const outputName = path.basename(file, ext) + '.webp'
  const output = path.join(SITEGRABS_DIR, outputName)

  await sharp(input)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output)

  const inputStat = (await import('fs')).statSync(input)
  const outputStat = (await import('fs')).statSync(output)
  const saved = (((inputStat.size - outputStat.size) / inputStat.size) * 100).toFixed(0)
  console.log(`${file} → ${outputName}  (${(inputStat.size / 1024).toFixed(0)}KB → ${(outputStat.size / 1024).toFixed(0)}KB, -${saved}%)`)
}

for (const file of ['ansel-light.jpg', 'darker.jpeg']) {
  const ext = path.extname(file)
  const input = path.join(HERO_DIR, file)
  const outputName = path.basename(file, ext) + '.webp'
  const output = path.join(HERO_DIR, outputName)

  await sharp(input)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(output)

  const inputStat = (await import('fs')).statSync(input)
  const outputStat = (await import('fs')).statSync(output)
  const saved = (((inputStat.size - outputStat.size) / inputStat.size) * 100).toFixed(0)
  console.log(`${file} → ${outputName}  (${(inputStat.size / 1024).toFixed(0)}KB → ${(outputStat.size / 1024).toFixed(0)}KB, -${saved}%)`)
}
