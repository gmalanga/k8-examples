# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Docker container

Build and test it locally:

```Bash
docker build -t my-react-app:v1 .
docker run -p 8080:80 my-react-app
```
(Visit [localhost:8080](http://localhost:8080/) to see it running!)

## Apply the deployment:

```Bash
kubectl apply -f deployment/deployment.yaml
```
Wait a few minutes, then run `kubectl get svc`

### Update Your Hosts File

Since `my-react-app.local` isn't a real website, you need to tell your computer to find it at 127.0.0.1.

Open your Hosts file as an Administrator:

- Windows: C:\Windows\System32\drivers\etc\hosts

- Mac/Linux: /etc/hosts

Add this line at the bottom:

```Plaintext
127.0.0.1 my-react-app.local
```

The Result: You can now type http://my-react-app.local into your browser, and the NGINX Controller will route that request to your React app!