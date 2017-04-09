# JOONTOS bot helper

![perhaps I can help](https://media.giphy.com/media/14jQC2AONxNBHq/giphy.gif)

This repo contains a node server, with routes to help the JOONTOS bot. For example, if this is located at `url = https://joontos-helper.now.sh` then calling `url/createUser/123123` will add the user with id 123123 to the set of users (if they are not there already).

## Requirements

Obviously Node.js (only tested on v6.9.0).

It is assumed that there is access to redis. It uses localhost on the default port unless the env variables `REDIS_HOST` and `REDIS_PORT` are set.

## Notes

This is a fairly straightforward Node/Express/Redis app. To make this fun for me, I have tried to use Ramda and a functional style.

If you need help, get on joontos.slack.com
