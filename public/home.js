function Home(){
    return(
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="Karadag Bank"
            title="Welcome to Karadag Bank"
            text="You are not secure"
            body={(<img src='bank.png' className="img-fluid" alt="Responsive image"/>)}
        />
    )
}