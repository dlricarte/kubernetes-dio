# Configuração de Banco de Dados com Persistência no Kubernetes

Este projeto configura o banco de dados MySQL em um ambiente Kubernetes com persistência de dados usando Persistent Volume (PV) e Persistent Volume Claim (PVC).

## Pré-requisitos

- Kubernetes configurado e funcionando
- Ferramenta `kubectl` instalada
- Diretório `/data/mysql` no nó Kubernetes para armazenamento persistente

## Configuração Automática

1. Acesse o diretório do projeto.
2. Execute o script `script.bat` para configurar todo o ambiente:

   ```cmd
   script.bat
