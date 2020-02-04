import './styles.css';
import { JournalLog, Journal} from './journalMethods.js';

var newJournalLog = new JournalLog();

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#journal-title').val();
    var body = $('#journal-body').val();
    // var output = journal(title + body);
    var newJournal = new Journal(title, body);
    newJournalLog.addJournal(newJournal);
    // console.log(newJournalLog.journals);

    $("#wordCount").text(newJournal.wordCount());
    $("#vowelCount").text(newJournal.vowelCount());
    $("#ConsoCount").text(newJournal.consoCount());
    $("#getTeaser").text(newJournal.getTeaser());
    
  });
});

// console.log(body.wordCount());

