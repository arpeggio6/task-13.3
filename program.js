process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytaæ co u¿ytkownik poda³ na wejœciu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        var env = process.env

        switch  (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/version':
                console.log(`Version: ${process.version}`);
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});