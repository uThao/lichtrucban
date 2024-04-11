const ngay = document.querySelector('.ngay');
const tb = document.querySelector('.trucban');
const vsp = document.querySelector('.vesinhphong');

const thead = document.querySelector('thead')

function getData() {
    const dataDays = ["T2(S)", "T3(S)", "T4(S)", "T4(C)", "T5(C)", "T6(C)"]
    const dataTb = ["Quốc Anh", "Duy", "Hạo", "Hoàng", "Hùng", "Huy", "Khang", "Lâm", "Long", "Mạnh", "Nam", "Nguyên", "Phát", "Phúc", "San", "Trí", "a Vong"];
    const dataVsp = ["Quốc Anh", "Duy", "Hạo", "Hoàng", "Hùng", "Khang", "Lâm", "Mạnh", "Nam", "Phát", "Phúc", "San", "Trí", "a Vong"];

    let countTb = 1;
    let countVsp = 6;
    dataDays.forEach( day => {
        const newRow = document.createElement("tr");
        newRow.setAttribute('data-id', day);
        newRow.innerHTML =  ` 
                                <th> ${day} </th>
                                <th style="font-weight: normal"> ${getTb()} </th> 
                                <th style="font-weight: normal"> ${getVsp()} </th>  
                                <th style="font-weight: normal"> </th>  
                                <th style="font-weight: normal"> </th>  
                            `
        thead.appendChild(newRow);
        console.log(newRow)
    })

    function getTb() {
        if(countTb == dataTb.length - 1) 
            countTb = 0;
        return dataTb[countTb++];
    }
    function getVsp() {
        if(countVsp == dataVsp.length - 1) 
            countVsp = 0;
        return dataVsp[countVsp++];
    }
}

function callData() {
    const date = new Date().getDay();
    if(date == 7)
        getData();
}
getData();
const timeInterval = setInterval(callData, 86400000)