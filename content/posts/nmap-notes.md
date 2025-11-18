+++
title = 'Nmap Notes for eJPT Certification'
date = 2025-11-18T01:08:54+01:00
draft = false
tags = ["EJPT", "Cibersecurity"]
+++

# Nmap Notes for eJPT Certification

## Index

- [Network device discovery](#network-device-discovery)
- [OS detection from IP](#os-detection-from-ip)
- [Open ports scanning](#open-port-scanning)
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

## Open ports scanning
```bash
nmap -p- --open -sS --min-rate 5000 -vvv <IP> -n -Pn
```
<details>
  <summary><strong>Notes</strong></summary>

The `-sS` option performs a fast, relatively stealthy TCP SYN “half-open” scan that checks port states without completing the TCP handshake.\
The `--min-rate 5000` option sets a minimum send rate of 5000 packets per second, speeding up the scan but making it noisier and easier to detect.\
The `-n` option disables DNS resolution, improving scan speed and avoiding extra DNS traffic.\
The `-Pn` option skips host discovery and assumes the target is up, useful when pings are filtered but wasting time on hosts that are actually down.
</details>

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

The `-D` option enables decoy scanning by adding fake source IP addresses alongside your real one. This makes IDSs see multiple IPs apparently probing the target ports, which helps to hide the true origin of the scan.
</details>

```bash
nmap --source-port <spoofing port> -Pn <IP>
```

<details>
  <summary><strong>Notes</strong></summary>

The `--source-port` option lets you **force the TCP or UDP source port** that your scan packets appear to come from. This could bypass some naive firewalls or ACLs only filter based on *source* or *destination* ports.
</details>

```bash
nmap --data-length <bytes> <IP> 
```

<details>
  <summary><strong>Notes</strong></summary>

The `--data-length` option tells nmap to **pad each probe packet with extra data** up to a specific total payload size. This can be useful for avoiding simplistic “small packet” filters.
</details>

---

## Service discovery on open ports

```bash
nmap -p<port list> -sV <IP>
```

<details>
  <summary><strong>Notes</strong></summary>

The `-sV` option enables service/version detection, probing open ports to identify which service is running on them (e.g., HTTP, SSH) and which exact version.
</details>