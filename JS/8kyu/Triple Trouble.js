function tripleTrouble(one, two, three){
    return one.split('').reduce((a,s,c)=>`${a}${one[c]}${two[c]}${three[c]}`,'')
 }