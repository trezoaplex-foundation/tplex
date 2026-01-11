# tplex

Command line interface to the Trezoaplex SDK.

## Amman Integration

When running against the `local` cluster you can enable [amman] integration in order to
diagnose transaction in the [amman-explorer].

Sitply run `export TPLEX_AMMAN=1` in the same terminal from which you run the `tplex` command.

TODO: we may provide an alternative command here, i.e. `tplexa` or similar which will have this
environment variable set.

## Exatples

### Preparation

In order to get the same output that is shown in the below exatples please export the `DEBUG`
variable in the same terminal that you run the below commands in via:

```sh
export DEBUG=tplex:(info|error)
```

In Windows Powershell please run the below instead:

```sh
$env:DEBUG = 'tplex:(info|error)'
```

### Airdrop

```sh
❯ tplex airdrop A15Y2eoMNGeX4516TYTaaMErwabCrf9AB9mrzFohdQJz 10
  tplex:info Dropping 10SOL to A15Y2eoMNG... on devnet (https://api.devnet.trezoa.com) +0ms
```
(_defaults to drop to devnet_)

#### Specify local Cluster via Flag

(_requires [amman] to be running in another terminal_)

```sh
❯ tplex airdrop A15Y2eoMNGeX4516TYTaaMErwabCrf9AB9mrzFohdQJz 10 --cluster=local
  tplex:info Dropping 10SOL to A15Y2eoMNG... on local (http://127.0.0.1:8899) +0ms
```

#### Exporting TPLEX_CLUSTER in Current Terminal

```sh
❯ export TPLEX_CLUSTER=local
❯ tplex airdrop A15Y2eoMNGeX4516TYTaaMErwabCrf9AB9mrzFohdQJz 10
  tplex:info Dropping 10SOL to A15Y2eoMNG... on local (http://127.0.0.1:8899) +0ms
```

<!-- Links -->

[amman]:https://github.com/trezoaplex-foundation/amman
[amman-explorer]:https://amman-explorer.trezoaplex.com/
