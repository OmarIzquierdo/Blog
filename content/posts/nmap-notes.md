+++
title = 'Nmap Notes for eJPT Certification'
date = 2025-11-18T01:08:54+01:00
draft = false
tags = ["EJPT", "Cibersecurity"]
+++

# Nmap Cheatsheet

## Index

- [Network device discovery](#network-device-discovery)
- [OS detection from IP](#os-detection-from-ip)
- [Open port scanning](#open-port-scanning)
- [Stealth port scan (IDS evasion)](#stealth-port-scan-ids-evasion)
- [Service discovery on open ports](#service-discovery-on-open-ports)

---

## Network device discovery

```bash
nmap -sn <IP range>
nmap -sn <IP range> | grep -oP '\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}' | sort
```

---

## OS detection from IP

```bash
nmap -O <IP>
```

<details>
  <summary><strong>Notes</strong></summary>

This command is too aggressive. Avoid this for sensible networks.
</details>

---

## Open port scanning

---

## Stealth port scan (IDS evasion)

```bash
nmap -p<port list> <IP> -f
```

<details>
  <summary><strong>Notes</strong></summary>

The **`-f` option in Nmap** allows you to fragment packets and send them separately in order to evade firewall detection.
</details>

```bash
nmap -p<port list> -D <decoy IPs list> <target IP>
```

<details>
  <summary><strong>Notes</strong></summary>

The `-D` option in Nmap enables decoy scanning by adding fake source IP addresses alongside your real one. This makes IDSs see multiple IPs apparently probing the target ports, which helps to hide the true origin of the scan.
</details>

```bash
nmap --source-port <spoofing port> -Pn <IP>
```

<details>
  <summary><strong>Notes</strong></summary>

`--source-port` lets you **force the TCP or UDP source port** that your scan packets appear to come from. Some naive firewalls or ACLs only filter based on *source* or *destination* ports in a simplistic way.
</details>

```bash
nmap --data-length <bytes> <IP> 
```

<details>
  <summary><strong>Notes</strong></summary>

`--data-length` tells nmap to **pad each probe packet with extra data** up to a specific total payload size. This can be useful for avoiding simplistic “small packet” filters.
</details>

---

## Service discovery on open ports

```bash
nmap -p<Port list> -sV <IP>
```