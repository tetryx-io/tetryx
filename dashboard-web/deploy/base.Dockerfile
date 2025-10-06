FROM node:20-bookworm as atrium-app-builder

RUN npm install -g npm@10.1.0 next

ENV APP_HOME /app
WORKDIR $APP_HOME

COPY . .

# Install node modules using yarn and a pre-set cache directory.
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn --frozen-lockfile