const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 13 * * 3', function () {
    console.log('Executendo Tarefa 1!', new Date().getSeconds());
})
    
setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 20000)

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1, 5)]
rule.hour = 13
rule.second = 30

const tarefa2 = schedule.scheduleJob(rule, function() {
    console.log('Executando Tarefa 2', new Date().getSeconds());
})