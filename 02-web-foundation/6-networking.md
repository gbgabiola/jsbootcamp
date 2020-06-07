# Networking Basics

- [RFCs](#rfcs)
- [IP, Internet Protocol](#ip-internet-protocol)
- [IP Address](#ip-address)
- [DNS Domain Name System](#dns-domain-name-system)
- [The TCP Protocol](#the-tcp-protocol)
- [The UDP Protocol](#the-udp-protocol)
- [HTTP](#http)
- [HTTPS](#https)
- [HTTP/2](#http2)
- [HTTP request](#http-request)
- [Websockets](#websockets)

- **Physical layer** is a network built as a series of layers that start from the very low level information exchange protocols
  - contains the standards for encoding and signaling of data
- **Data Link layer** includes protocols like ethernet and Wi-Fi
  - provides data framing, addressing (identify a device in the network), error detection, and more
- layers job is to make a connection, provide a high reliability, handle redundancy and failover
- higher levels stacks upon each other to provide higher level functionality
- Web is built upon a stack of protocols commonly called **TCP/IP**
- **TCP/IP** is an umbrella term that identifies several different protocols that operate on different levels
- **IP** (Internet Protocol) sits at the **Network layer**
- **TCP** (Transmission Control Protocol), and **UDP** (User Datagram Protocol) sits at the **Transport layer**
- on top of TCP and UDP, we can find **Application layer** protocols, like **HTTP** (Hyper Text Transfer Protocol), and its secure version **HTTPS**, FTPS, Websockets, and more


## RFCs

- [RFC (_Request For Comments_)](https://en.wikipedia.org/wiki/List_of_RFCs) document is an official IETF (Internet Engineering Task Force) document
- RFCs started in 1969 during ARPANET times
  - Internet was created in this way, with RFCs being starting point of discussion, or protocol implementation details that people used to implement the actual software
- Request for Comments name, encouraged a community discussion around those papers (printed form)
- revisions to RFC documents need to be published as independent RFCs, and older RFCs are marked as superseded by those newer revisions
- **Conclusion**: RFCs are technical documents that, after going through a rigorous process of discussion and technical verification are added to the list of official protocols recognized by the IETF, and being a standard they can then be implemented by software vendors


## IP, Internet Protocol

- **IP** (Internet Protocol) is the foundation of the Internet
  - it's is to form a communication channel from computer to computer over a vast network
  - this protocol defines the concept of **datagram**
- **datagram** is a way to organize the data that is sent between two nodes in the network, composed by 2 parts:
  - **header** contains metadata about the payload, including the size, the identification number of the fragment, a checksum, the source IP address and the destination IP address
  - **payload** is the information to transfer
- sending data to another computer:
  - data is cut by the sender into many little IP fragments
  - numbering them allows the receiver to rebuild the original message, because there's one big property of the IP protocol we need to mention: it's connectionless
- IP packets are sent from the sender and they can independently take different routes to reach the destination
- fundamentals of the Internet network resilience
  - intermediate nodes of the network can independently decide where to route IP packets
  - if one route fails, other routes can be used to reach the destination
- if one packet does not reach the destination, or does not reach it in time, the destination will discard the whole IP datagram received, which must be re-sent
- each node on the network is identified by an address (IP address)


## IP Address

- nodes are identified by IP addresses in a TCP/IP network
- IP address is composed by 4 8-bit parts based on IPv4 and IPv6 is the newest version
- IPv6 addresses contain 128 bits and offers more advanced mechanisms compared to the 32 bits of IPv4
- each separated part of an address is identified by a number from 0 to 25, e.g., 212.21.4.28, 8.8.8.8, 121.2.1.2, etc
- originally, each computer had its own unique IP address, but now, every time you connect to a network with your computer/phone, you'll get a random IP address
  - this IP address is local, e.g., home or office router
- some providers offer static IP addresses, that never change, which can be used to reach your network from the outside, but it's usually a premium service
- IP addresses reserved for LAN usage, e.g., 192.168.xxx.xxx
- from any computer, you can reach itself using special address 127.0.0.1


## DNS Domain Name System

- we access website using **domain name**, e.g., google.com, yahoo.com
  - we also can with IP address, but very rare
- **Domain Name System** (DNS) is a system that maps domain names to IP address
  - DNS is a network of servers.
- DNS servers will receive the requests from your computer, and in turn will ask their own reference DNS server
- **root DNS server** is a DNS server at the top
- DNS knows the IP address of the DNS servers that are managing each domain extension, like com, net, org, and etc
  - including the country-specific domain extensions
  - and the new ones like blog, dev or tech
- localhost is a special domain which always maps to 127.0.0.1, the IP address that identifies the computer on itself
- DNS servers know the IP addresses mapping of all the domains under their extension
- the system is set up to ensure caching, redundancy and capacity to endure high concurrent requests


## The TCP Protocol

- TCP (**Transmission Control Protocol**) is the basis of the Web and other applications like Email
  - one of the oldest pillars of the Internet, defined in [RFC 793](https://tools.ietf.org/html/rfc793) on 1981
- TCP sits on top of the Internet Protocol (IP) and builds a base system upon which application-level protocols like HTTP, FTP, IMAP and many others.
- contrary to IP and UDP, TCP **connection oriented**
- when data is transmitted over TCP, there's a relatively complex workflow called handshake that must happen
- handshake allows the end-to-end connection to happen, and this makes sure TCP can provide _reliability_
- using TCP, we can always know if a packet the sender sent was received correctly by the receiver
  - if a packet gets lost, the protocol is able to handle it and the packet is re-sent
- in IP protocol, connections happen from computer to computer
- in TCP, a connection happens form process to process, using the concept of **ports**
- the port, associated to an IP address, allows to uniquely identify a process on a computer, e.g., localhost:8080, google.com:1234
- each application protocol has a default port, e.g., HTTP has 80, HTTPS has 443, FTP has 21
  - this is why you don't usually specify the port
- port numbers range from 1 to 65535 (port number is a 16 bits unsigned, which corresponds to 2^16 possible values)


## The UDP Protocol

- UDP (**User Datagram Protocol**) is a transfer protocol, an alternative to TCP
  - main difference from TCP is that it's connectionless
  - drawback is that UDP is not reliable as TCP
- UDP is faster, each packet sent is more lightweight, and have a lighter handshake process
- in TCP, if a packet gets lost, the packet is re-sent
- in UDP, this is not built-in into the protocol, and must be handled at a higher level (built on top of it)
- defined in [RFC 768](https://tools.ietf.org/html/rfc768) on 1980
- some application protocols that rely on the UDP layer are DNS and DHCP, and more importantly is the base layer of **HTTP/3**, the next version of HTTP
- UDP protocol uses ports to allow communication between processes, like with TCP


## HTTP

- HTTP (**Hyper Text Transfer Protocol**) is one of the most popular of the **application protocols** of TCP/IP, the suite of protocols that powers the Internet
  - makes the www work, giving browsers a language to communicate to remote servers that host web pages
  - first standardized in 1991
  - the goal was to allow researchers to easily exchange and interlink their papers
  - meant as a way for the scientific community to work better
- back then the internet main applications basically consisted in FTP (the File Transfer Protocol), Email and Usenet (newsgroups, today almost abandoned)
- first graphical web browser released on 1993
- HTTP and HTTP/2 work on **TCP**, while HTTP/3 works on QUIC, a protocol built on top of **UDP**
- HTTP protocol is considered insecure, like (SMTP, FTP..) not served over an encrypted connection.

### HTML documents

- HTTP is the way **web browsers** (_clients_) communicate with **web servers**
- Hyper Text Transfer Protocol name derives from the need of transferring not just files, but hypertexts (written in HTML) and served by the browser with interactive links

### Hyperlinks

- a link is composed by a first part that determines the protocol and the server address, either through a domain name or an IP
- anything appended to the address part represents the document path
- e.g., https://flaviocopes.com/courses:
  - https is the protocol
  - flaviocopes.com is the domain name that points to my server
  - courses is the document URL relative to the server root path.
- web server is responsible for interpreting the request and, once analyzed, serving the correct response

### A request

- request consist of three things: **URL** and **HTTP method** (verb), and **HTTP headers**
- **HTTP methods**:
  - **GET** is used when you type an URL in the browser address bar, or clicking a link
    - asks the server to send the requested resource as a response
  - **HEAD** tells the server to only send headers as response
  - **POST** send data to the server, e.g., forms, interacting with a REST API
  - **PUT** creates a resource at that specific URL, with the parameters passed in the request body, mainly used in REST APIs
  - **DELETE** request deletion of thae resource against an URL, mainly used in REST APIs
  - **OPTIONS** send back the list of HTTP methods allowed for that specific URL
  - **TRACE** returns back to the client the request that has been received, used for debugging or diagnostic purposes

### HTTP Client/Server communication

- HTTP belongs to the TCP/IP suite, is a _stateless_ protocol
- servers have no idea what's the current state of the client
  - only care about getting request and fulfilling them

```sh
$ telnet flaviocopes.com 80

GET /a-page HTTP/1.1
Host: flaviocopes.com

curl -i https://flaviocopes.com/axios/
```


## HTTPS

- data performs 2 trips: browser to the web server and web server to the browser
  - any network the data is going to cross can be **inspected** and **manipulated**
- HTTPS aims to solve the problem at the root: the entire communication between the browser and the web server is encrypted
- HTTP has default server port 80, and 443 for HTTPS
- HTTPS is also called HTTP over SSL, or HTTP over TLS
  - difference between the two: TLS is the successor of SSL
- the only thing that is not encrypted when using HTTPS is the web server domain, and the server port
- HTTPS enables HTTP/2, which has a huge advantage over HTTP/1.1: it's way faster
- HTTP/2 **requires HTTPS**


## HTTP/2

- HTTP/2 is the latest standardized version of the HTTP protocol
  - released on 2015 by the IETF
- main features:
  - request and response multiplexing
  - efficient compression of HTTP headers
  - server push
  - binary communication

### Multiplexing

- TCP is the underlying protocol on top of which HTTP is built
  - TCP stays at the transport layer, while HTTP at the application level
- HTTP/2 enabled request/response multiplexing on top of a single TCP connection, allowing the server to serve multiple requests with the same connection resulting in a much faster communication

### Headers compression

- compression enables HTTP to have a lighter footprint, reducing the amount of data exchanged between the client and the server

### Server push

- Server push is a feature that allows to send multiple responses to a single request
- instead of sending the HTML, waiting for the browser to parse it and fire other requests to get the assets, the server can push them altogether
- a server can also decide to send resources right away, pre-optimizing the next page load and putting it in the client cache
- **Note**: server push has drawback, e.g., sending too much data to the client that might not be needed (maybe it's already available on the client as cached)

### Binary communication

- HTTP/1.1 used text-based communication
- HTTP/2 uses binary communication
  - advantages: being more efficient to parse, less error prone and more compact

### What's the evolution for the future?

- **HTTP/3** is under development, and will based on the QUIC protocol
- QUIC is a protocol based on UDP (rather than TCP) at the transport layer
  - HTTP/3 will be based on a completely different tech stack compared to HTTP/2 and HTTP/1.x


## HTTP request

### Sending the request

composed of 3 parts:

- the request line
- the request header
- the request body

The **request line** sets on a singe line:

- the HTTP method
- the resource location
- the protocol version
- `GET / HTTP/1.1`

The **request header** is a set of field: value pairs that set certain values, most used header fields are:

- Origin
- Accept
- Accept-Encoding
- Cookie
- Cache-Control
- Dnt

The **request body** is optional, not used in GET requests but very much used in POST requests and it can contain data in JSON format.

### The response

Different status code and message:

- 404 Not Found
- 403 Forbidden
- 301 Moved Permanently
- 500 Internal Server Error
- 304 Not Modified
- 401 Unauthorized


## Websockets

- WebSockets are an alternative to HTTP communication in Web Applications
- HTTP has a different way of communication: it's a request/response protocol, the server returns some data when the client requests it
  - great for **occasional data exchange** and interactions initiated by the client
  - much simpler to implement
- with WebSockets:
  - the **server can send a message to the client** without the client explicitly requesting something
  - the client and the server can **talk to each other simultaneously**
  - **very little data overhead** needs to be exchanged to send messages, meaning **low latency communication**
  - great for **real-time** and **long-lived** communications
  - require a bit more overhead

### Secured WebSockets

- always use the secure, encrypted protocol for WebSockets, `wss://`
- `ws://` refers to the unsafe WebSockets version (the http:// of WebSockets), and should be avoided
