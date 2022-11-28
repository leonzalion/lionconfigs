import { chmodrSync } from 'chmodrp'
import { execaCommandSync as exec } from 'execa'

import { chProjectDir, copyPackageFiles, rmDist } from '../src/index.js'

chProjectDir(import.meta.url)
rmDist()
await copyPackageFiles({
	additionalFiles: [
		'src/git',
		'src/tsconfig',
		'src/tsconfig.json',
		'src/markdownlint.json',
		'src/bin/ts-node.sh',
	],
})
exec('tsc')
exec('tsc-alias')

chmodrSync('dist/bin', 0o755)
