
  export function TextOn({text, num}: {text?: string; num?: number;}) {

    let full:any = [];
    var newText = (text!).split('');
    for (var i in newText) {
        var curr:any = <span key={`toolLetter-${i}`} className="toolLetter" style={{animationDelay:`${ Number(i)*.015 + num!}s`}}>{newText[i]}</span>;
        full.push(curr)
      }

      return (full)
  }