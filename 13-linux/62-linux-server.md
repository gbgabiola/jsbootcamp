# Linux Server

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Create a DigitalOcean Account](#create-a-digitalocean-account)
- [Create a Project](#create-a-project)
- [Create a droplet](#create-a-droplet)
- [Access the Droplet as root](#access-the-droplet-as-root)
- [Next Step](#next-step)


## Introduction

- we can deploy our code using: Platform As A Service (PAAS) tool like Heroku or Firebase
  - give us less control, but we get a lot in return in terms of maintenance
  - tradeoff is that pricing can rise up quickly when we need to scale the application
- other side is to purchase a server and put it into a data center
  - companies can rent "metal" servers and have complete control over them
  - costs a lot, and we need to be an excellent system administrator, and invest a lot of time into maintenance
- middle ground is provided by companies like Linode, DigitalOcean, Azure, Google Cloud Platform or AWS
  - provides a cloud server service which is very wide in terms of what they can do for us
- all have a VPS solution: choose Operating System (OS), how much power, disk size and RAM, click a button, and have a virtual server ready in minutes
  - Amazon Web Services has [EC2 service](https://aws.amazon.com/ec2/)
  - Google has [Compute Engine](https://cloud.google.com/compute).
- Virtual Private Server (VPS) outsource the costs of running, upgrading and maintaining the hardware, while keeping a lot of controls over our server


## Create a DigitalOcean Account

- [DigitalOcean](https://www.digitalocean.com/) has a 1-click installation process for the most famous applications and operating systems
- provides a global network of data centers and CDN locations
- very reliable and convenient with a 5$/m starting point


## Create a Project

- create a new project
  - enter a name and description for the project
  - once you click "Create Project", the project is now added to the list of projects, and the **Project Dashboard** appears
- DigitalOcean Droplet is a virtual machine, a VPS
  - we can also initialize a managed database
  - create a space (a place to store files)
  - create a load balancer to distribute traffic between multiple droplets


## Create a droplet

- click the **Get Started with a Droplet** button in the project dashboard
- **Choose an image**: Linux distributions (Ubuntu, Fedora, Debian and CentOS) and FreeBSD, another UNIX OS
  - choose a specific version
- **Marketplace** panel lets us install a server preconfigured with an application like WordPress, Ghost, a LAMP server or any of the 150+ applications with a single click
- **Snapshots**, **Backups** and **Custom images** panels let us create a server from a pre-existing server we had
- pick **Ubuntu LTS** from the **Distributions** panel
- **Choose a plan**: select **Standard** plan or other plans
- **Add block storage**: to have persistent data storage (not now)
- **Choose a datacenter region**: select the one nearest to our visitors
- **VPC Network** and **Select additional options** can be ignore for now
- **Authentication**: choose **Password** to keep things simpler
  - **SSH keys** authentication is recommended for real servers
  - Type a password for the `root` user, the Linux system administrator
- fill a username that's meaningful
- click **Create Droplet** button
- we have a full control of anything: turn it on or off, resize, etc
  - **Note**: turning off a droplet does not stop DigitalOcean billing: destroy it, so it does not take any space at all


## Access the Droplet as root

- click **Access** menu, and the **Launch Console** button
  - enter `root` as the user name, and the password
- access the server using terminal app: `ssh root@<IP ADDRESS>`
  - immediately get a warning: accept with "yes"
  - then type the password


## Next Step

- create a user that is not `root`
- securing the server
- set up any server we want to run on it
