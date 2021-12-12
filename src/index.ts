import { importActivity } from './import/mifit/importActivity'
import { importSleep } from './import/mifit/importSleep'
import { RepositoryManager } from './lib/git/repositoryManager'
import { storeCharactersCount } from './lib/git/storeCharactersCount'
import { startScheduleJobs } from './lib/schedule'
import { updateCharactersCount } from './lib/schedule/updateCharactersCount'
require('dotenv').config()

// importActivity()
// importSleep()
// storeCharactersCount()
// registerSchedules()
startScheduleJobs()
