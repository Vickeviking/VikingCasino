class Client
{
  constructor(conn, id){
    this.conn = conn;
    this.id = id;
    this.session = null;

    this.state = null;
  }

  broadcast(data)
  {
    if(!this.session){
      throw new Error('Can not broadcast without seassion');
    }

    data.clientId = this.id;

    this.session.clients.forEach(client => {
      if(this === client){
        return;
      }
      client.send(data);
    });
  }

  send(data){
    const msg = JSON.stringify(data);
      console.log(`sending message ${msg}`);
      this.conn.send(msg, function ack(err){
          if(err){
              console.error('messsage failed', msg, err);
          }
      })
  }
}

//tetris

module.exports = Client;
