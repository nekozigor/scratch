<template>
  <div class="form-group row">
    <label for="{email}" class="col-md-4 col-form-label text-md-right">{{label}}</label>
    <div class="col-md-6">
      <input
        :id="name"
        :type="type"
        :name="name"
        required="required"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        class="form-control"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        :class="{'is-invalid': error}"
      />
      <span role="alert" class="invalid-feedback">
        <strong>{{error}}</strong>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "label", "value", "type", "autofocus", "autocomplete", "error"],
  
};
</script>